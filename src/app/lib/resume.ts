const RESUME_FILE = "/eng-benjamin-cv.pdf";
const RESUME_DOWNLOAD_NAME = "eng-benjamin-cv.pdf";

export function downloadResume() {
  const link = document.createElement("a");
  link.href = RESUME_FILE;
  link.download = RESUME_DOWNLOAD_NAME;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
