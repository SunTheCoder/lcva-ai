import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { resolve } from 'path';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const { emotion } = await request.json();
    
    // Get absolute path to Python script
    const pythonScript = resolve(process.cwd(), '../art_recommender.py');
    
    // Debug log
    console.log('Python script path:', pythonScript);
    console.log('File exists:', existsSync(pythonScript));

    return new Promise((resolve) => {
      // Use python3 if available, fallback to python
      const python = spawn('python3', [pythonScript]);
      let outputData = '';
      let errorData = '';

      python.stdout.on('data', (data) => {
        outputData += data.toString();
      });

      python.stderr.on('data', (data) => {
        errorData += data.toString();
      });

      // Write the input after setting up the listeners
      python.stdin.write(emotion + '\n');
      python.stdin.end();

      python.on('close', (code) => {
        console.log('Python process exited with code:', code);
        console.log('Final output:', outputData);
        console.log('Final error:', errorData);

        if (code !== 0 || errorData) {
          console.error('Python Error:', errorData);
          resolve(NextResponse.json({
            success: false,
            error: 'Failed to get recommendations',
            details: errorData
          }));
          return;
        }

        try {
          // Ensure we have complete JSON
          const result = JSON.parse(outputData);
          resolve(NextResponse.json(result));
        } catch (_) {
          console.error('Failed to parse Python output:', outputData);
          resolve(NextResponse.json({
            success: false,
            error: 'Invalid response format',
            details: outputData
          }));
        }
      });

      python.on('error', (error) => {
        console.error('Failed to start Python process:', error);
        resolve(NextResponse.json({
          success: false,
          error: 'Failed to start Python process',
          details: error.message
        }));
      });
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 