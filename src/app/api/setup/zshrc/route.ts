import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the .zshrc file from utils
    const filePath = path.join(process.cwd(), 'src', 'utils', '.zshrc');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the file content with appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'inline; filename=".zshrc"',
      },
    });
  } catch (error) {
    console.error('Error reading .zshrc file:', error);
    return new NextResponse('Error retrieving configuration file', { status: 500 });
  }
}