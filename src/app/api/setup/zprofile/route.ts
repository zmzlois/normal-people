import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the .zprofile file from utils
    const filePath = path.join(process.cwd(), 'src', 'utils', '.zprofile');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the file content with appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'inline; filename=".zprofile"',
      },
    });
  } catch (error) {
    console.error('Error reading .zprofile file:', error);
    return new NextResponse('Error retrieving configuration file', { status: 500 });
  }
}