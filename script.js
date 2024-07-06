const contraints = {
  audio: true,
  video: true,
};

const video = document.querySelector("video");

navigator.mediaDevices
  .getUserMedia(contraints)
  .then((stream) => {
    console.log("mediaStreams", stream);
    console.log("mediaStreams", stream.getAudioTracks());
    console.log("video", video);
    video.srcObject = stream;
  })
  .catch((error) => {
    console.log("-------Error in getting streams--------\n", error);
  });
