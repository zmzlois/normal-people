#!/bin/bash

# Lois Zhao's macOS Setup Script
# This script sets up a new macOS machine with my preferred tools and configurations

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Error handling function
error_handler() {
  local line_number=$1
  local error_code=$2
  local last_command=$3
  echo -e "${RED}ERROR at line ${line_number}: Command '${last_command}' exited with status ${error_code}${NC}"
}

# Set trap for error handling
trap 'error_handler ${LINENO} $? "$BASH_COMMAND"' ERR

# Log function
log() {
  local level=$1
  local message=$2
  local timestamp=$(date +"%Y-%m-%d %H:%M:%S")
  
  case "$level" in
    "INFO")
      echo -e "${BLUE}[INFO]${NC} ${timestamp} - $message"
      ;;
    "SUCCESS")
      echo -e "${GREEN}[SUCCESS]${NC} ${timestamp} - $message"
      ;;
    "WARNING")
      echo -e "${YELLOW}[WARNING]${NC} ${timestamp} - $message"
      ;;
    "ERROR")
      echo -e "${RED}[ERROR]${NC} ${timestamp} - $message"
      ;;
  esac
}

# Check for macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
  log "ERROR" "This script is intended for macOS only. Detected OS: $OSTYPE"
  exit 1
fi

# Create a log file
LOG_FILE="$HOME/setup_script_$(date +%Y%m%d_%H%M%S).log"
touch "$LOG_FILE"
log "INFO" "Logging to $LOG_FILE"
exec > >(tee -a "$LOG_FILE") 2>&1

# Function to check command success
check_success() {
  if [ $? -eq 0 ]; then
    log "SUCCESS" "$1 completed successfully"
  else
    log "ERROR" "$1 failed, see log for details"
    if [ "$2" = "CRITICAL" ]; then
      log "ERROR" "Critical step failed. Exiting script."
      exit 1
    fi
  fi
}

# Show script version
VERSION="1.0.0"
log "INFO" "Setup script version: $VERSION"
log "INFO" "🚀 Starting Lois's macOS setup..."
echo "=================================================="

# 1. Install Homebrew if not installed
log "INFO" "Checking for Homebrew installation..."
if ! command -v brew &>/dev/null; then
  log "INFO" "Homebrew not found. Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  check_success "Homebrew installation" "CRITICAL"

  # Add Homebrew to path
  log "INFO" "Configuring Homebrew in shell profile..."
  if [[ $(uname -m) == 'arm64' ]]; then
    # For Apple Silicon Macs
    log "INFO" "Detected Apple Silicon Mac, configuring accordingly..."
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >>$HOME/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
  else
    # For Intel Macs
    log "INFO" "Detected Intel Mac, configuring accordingly..."
    echo 'eval "$(/usr/local/bin/brew shellenv)"' >>$HOME/.zprofile
    eval "$(/usr/local/bin/brew shellenv)"
  fi
  check_success "Homebrew path configuration"
else
  log "SUCCESS" "Homebrew is already installed"
fi

# 2. Install essential CLI tools and apps
log "INFO" "Installing essential CLI tools..."
brew install git gh neovim zsh starship fzf ripgrep bat exa tmux docker || {
  log "WARNING" "Some CLI tools failed to install. Continuing with installation."
}
check_success "CLI tools installation"

log "INFO" "Installing applications..."
{
  brew install --cask google-chrome cursor visual-studio-code rectangle slack claude ghostty affine lark datagrip discord
} || {
  log "WARNING" "Some applications failed to install. Please check the log for details."
}
check_success "Applications installation"

# Install GeistMono font for Neovim
log "INFO" "Installing GeistMono font for Neovim..."
{
  # Create font directory if it doesn't exist
  log "INFO" "Creating font directory..."
  mkdir -p $HOME/.local/share/fonts
  
  # Download GeistMono Nerd Font
  log "INFO" "Downloading GeistMono Nerd Font..."
  if curl -fsSL --retry 3 --retry-delay 2 https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/GeistMono.zip -o /tmp/GeistMono.zip; then
    log "SUCCESS" "Downloaded GeistMono font"
    
    # Extract font files
    log "INFO" "Extracting font files..."
    if unzip -q /tmp/GeistMono.zip -d $HOME/.local/share/fonts; then
      log "SUCCESS" "Extracted font files"
      
      # Clean up
      log "INFO" "Cleaning up temporary files..."
      rm /tmp/GeistMono.zip
      
      # Update font cache
      log "INFO" "Updating font cache..."
      fc-cache -fv
      check_success "Font cache update"
    else
      log "ERROR" "Failed to extract font files"
    fi
  else
    log "ERROR" "Failed to download GeistMono font"
  fi
} || {
  log "WARNING" "GeistMono font installation failed, but continuing with setup"
}

# 3. Install language-specific tools
log "INFO" "Setting up development environment..."

# Prepare environment for React Native development
# Node.js and JavaScript ecosystem
log "INFO" "Installing Node.js tools for React Native development..."

# Install nvm
log "INFO" "Installing nvm (Node Version Manager)..."
{
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  check_success "NVM installation"
  
  # Source nvm to make it available in this session
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  
  # Verify NVM installation
  if command -v nvm &>/dev/null; then
    log "SUCCESS" "NVM is now available"
  else
    log "WARNING" "NVM installed but not available in current session"
  fi
} || {
  log "ERROR" "Failed to install NVM"
}

# Install pnpm via corepack
log "INFO" "Installing pnpm via corepack..."
{
  npm install --global corepack@latest
  check_success "Corepack installation"
  
  log "INFO" "Enabling pnpm via corepack..."
  corepack enable pnpm
  check_success "pnpm enablement"
} || {
  log "WARNING" "pnpm installation failed, continuing with setup"
}

# Install React Native dependencies
log "INFO" "Installing React Native dependencies (watchman, rbenv)..."
{
  brew install watchman rbenv
  check_success "watchman and rbenv installation"
  
  # Install Ruby versions
  log "INFO" "Installing Ruby versions via rbenv..."
  
  # Check if Ruby 3.1.0 is already installed
  if ! rbenv versions | grep -q "3.1.0"; then
    log "INFO" "Installing Ruby 3.1.0..."
    rbenv install 3.1.0 || log "WARNING" "Failed to install Ruby 3.1.0"
  else
    log "INFO" "Ruby 3.1.0 is already installed"
  fi
  
  # Check if Ruby 3.6.0 is already installed
  if ! rbenv versions | grep -q "3.6.0"; then
    log "INFO" "Installing Ruby 3.6.0..."
    rbenv install 3.6.0 || log "WARNING" "Failed to install Ruby 3.6.0"
  else
    log "INFO" "Ruby 3.6.0 is already installed"
  fi
  
  # Set global Ruby version
  log "INFO" "Setting global Ruby version to 3.1.0..."
  rbenv global 3.1.0
  check_success "Ruby global version setting"
  
  # Install Ruby gems
  log "INFO" "Installing CocoaPods..."
  gem install cocoapods || log "WARNING" "Failed to install CocoaPods"
  
  log "INFO" "Installing securerandom gem..."
  gem install securerandom -v 0.3.2 || log "WARNING" "Failed to install securerandom gem"
} || {
  log "WARNING" "Ruby setup encountered issues"
}

# Prepare Android environment
log "INFO" "Setting up Android development environment..."
{
  # Install Android Studio
  log "INFO" "Installing Android Studio..."
  brew install --cask android-studio
  check_success "Android Studio installation"
  
  # Install Java
  log "INFO" "Installing Java version 17 (Zulu)..."
  brew install --cask zulu@17
  check_success "Java 17 installation"
  
  # Confirm Java version
  log "INFO" "Confirming Java version and opening in Finder..."
  {
    java_path=$(brew info --cask zulu@17 | grep -o "zulu@17/.*" | awk '{print $1}')
    if [[ -n "$java_path" ]]; then
      open /opt/homebrew/Caskroom/zulu@17/$java_path
      log "SUCCESS" "Opened Java installation directory"
    else
      log "WARNING" "Could not determine Java installation path"
    fi
  } || {
    log "WARNING" "Could not open Java installation directory"
  }
  
  log "SUCCESS" "Basic Android environment setup completed"
  log "INFO" "For more details, visit: https://reactnative.dev/docs/set-up-your-environment?platform=android"
} || {
  log "WARNING" "Android environment setup encountered issues"
}

# Prepare iOS environment
log "INFO" "Setting up iOS development environment..."
{
  log "INFO" "Installing Xcode Command Line Tools..."
  xcode-select --install || log "WARNING" "Xcode CLI tools installation may have failed - you may need to install manually"
  log "INFO" "You should also install Xcode from the App Store: https://itunes.apple.com/us/app/xcode/id497799835?mt=12"
} || {
  log "WARNING" "iOS environment setup encountered issues"
}

# Install Claude Code review tool
log "INFO" "Installing Claude Code CLI tool..."
{
  npm install -g @anthropic-ai/claude-code
  check_success "Claude Code CLI installation"
} || {
  log "WARNING" "Failed to install Claude Code CLI"
}

# 4. Install Oh My Zsh
log "INFO" "Setting up shell environment..."
if [ ! -d "$HOME/.oh-my-zsh" ]; then
  log "INFO" "Installing Oh My Zsh..."
  {
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
    check_success "Oh My Zsh installation"
  } || {
    log "ERROR" "Failed to install Oh My Zsh"
  }
else
  log "SUCCESS" "Oh My Zsh is already installed"
fi

# 5. Install zsh plugins
log "INFO" "Installing zsh plugins..."
{
  brew install zsh-autosuggestions zsh-syntax-highlighting
  check_success "ZSH plugins installation"
} || {
  log "WARNING" "Failed to install some ZSH plugins"
}

# 6. Download dotfiles
log "INFO" "Setting up configuration files..."

# Create config directories if they don't exist
{
  log "INFO" "Creating config directories..."
  mkdir -p $HOME/.config
  check_success "Config directory creation"
  
  # Download .zshrc
  log "INFO" "Downloading .zshrc configuration..."
  if curl -fsSL --retry 3 --retry-delay 2 https://normal-people.com/setup/zshrc >$HOME/.zshrc; then
    log "SUCCESS" "Downloaded .zshrc file"
  else
    log "ERROR" "Failed to download .zshrc file"
  fi
  
  # Download .zprofile
  log "INFO" "Downloading .zprofile configuration..."
  if curl -fsSL --retry 3 --retry-delay 2 https://normal-people.com/setup/zprofile >$HOME/.zprofile; then
    log "SUCCESS" "Downloaded .zprofile file"
  else
    log "ERROR" "Failed to download .zprofile file"
  fi
  
  # Download starship config
  log "INFO" "Downloading starship configuration..."
  if curl -fsSL --retry 3 --retry-delay 2 https://normal-people.com/setup/starship.toml >$HOME/.config/starship.toml; then
    log "SUCCESS" "Downloaded starship.toml file"
  else
    log "ERROR" "Failed to download starship.toml file"
  fi
} || {
  log "WARNING" "Configuration files setup encountered issues"
}

# 7. Git configuration
log "INFO" "Configuring Git..."
{
  log "INFO" "Collecting Git user information..."
  echo -e "${BLUE}Please enter your Git configuration details:${NC}"
  read -p "Enter your Git username (e.g., Lois Zhao): " git_username
  read -p "Enter your Git email: " git_email
  
  if [[ -n "$git_username" && -n "$git_email" ]]; then
    log "INFO" "Setting Git global configuration..."
    git config --global user.name "$git_username"
    git config --global user.email "$git_email"
    git config --global init.defaultBranch main
    git config --global core.editor "nvim"
    git config --global pull.rebase false
    check_success "Git configuration"
  else
    log "WARNING" "Git configuration skipped due to empty username or email"
  fi
} || {
  log "WARNING" "Git configuration encountered issues"
}

# 8. SSH key for GitHub
log "INFO" "Setting up SSH key for GitHub..."
{
  mkdir -p $HOME/.ssh
  log "INFO" "Generating SSH key..."
  ssh-keygen -t ed25519 -C "$git_email" -f $HOME/.ssh/id_ed25519 -N ""
  check_success "SSH key generation"
  
  log "INFO" "Starting SSH agent..."
  eval "$(ssh-agent -s)"
  
  log "INFO" "Adding SSH key to agent..."
  ssh-add $HOME/.ssh/id_ed25519
  check_success "SSH key addition to agent"
  
  # 9. Add SSH config
  log "INFO" "Creating SSH config file..."
  cat >$HOME/.ssh/config <<EOF
Host github.com
  IdentityFile ~/.ssh/id_ed25519
EOF
  check_success "SSH config creation"
  
  # Display the public key
  log "SUCCESS" "SSH setup complete"
  log "INFO" "Here's your new SSH public key (add this to GitHub):"
  echo -e "${GREEN}$(cat $HOME/.ssh/id_ed25519.pub)${NC}"
} || {
  log "WARNING" "SSH setup encountered issues"
}

# Open applications for login
log "INFO" "Opening applications for initial setup..."
{
  # Function to open app safely
  open_app_safely() {
    local app_name=$1
    log "INFO" "Opening $app_name for login..."
    if [[ -d "/Applications/$app_name.app" ]]; then
      open -a "$app_name" || log "WARNING" "Failed to open $app_name"
    else
      log "WARNING" "$app_name not found in Applications folder"
    fi
  }
  
  # Open applications one by one
  open_app_safely "Cursor"
  open_app_safely "Affine"
  open_app_safely "Lark"
  open_app_safely "DataGrip"
} || {
  log "WARNING" "Opening applications encountered issues"
}

# Final messages
log "SUCCESS" "✅ Setup complete!"

log "INFO" "🔄 Please restart your terminal or run 'source ~/.zshrc' to apply all changes."
log "INFO" "🌟 Don't forget to add your SSH key to GitHub: https://github.com/settings/keys"

# Create completion file to check for successful installation
touch "$HOME/.setup_complete"

# Provide summary
log "INFO" "Setup script completed at: $(date)"
log "INFO" "Log file available at: $LOG_FILE"

# If we got here, set exit status to success
exit 0
