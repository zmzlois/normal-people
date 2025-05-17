import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the setup.sh file from public
    const filePath = path.join(process.cwd(), 'public', 'setup.sh');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the file content with appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'inline; filename="setup.sh"',
      },
    });
  } catch (error) {
    console.error('Error reading setup.sh file:', error);
    return new NextResponse('Error retrieving setup script', { status: 500 });
  }
}