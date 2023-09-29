// Declare variables for screen stream and media recorder
let screenStream;
let mediaRecorder;

// Function to start screen recording
async function startRecording() {
  try {
    screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    mediaRecorder = new MediaRecorder(screenStream);

    const chunks = [];
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      // You can save the recording or display it in a video element
      // Example: document.getElementById('videoPlayer').src = url;
    };

    mediaRecorder.start();
  } catch (error) {
    console.error('Error starting screen recording:', error);
  }
}

// Function to stop recording
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    screenStream.getTracks().forEach((track) => track.stop());
  }
}

// Add event listeners to start and stop recording
document.getElementById('startRecordingButton').addEventListener('click', startRecording);
document.getElementById('stopRecordingButton').addEventListener('click', stopRecording);



