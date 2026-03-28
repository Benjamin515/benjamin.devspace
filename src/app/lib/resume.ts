const RESUME_FILE = "/Benjamin-Mwiti-Resume.pdf";
const RESUME_DOWNLOAD_NAME = "Benjamin Mwiti — Resume.pdf";

export function downloadResume() {
  const link = document.createElement("a");
  link.href = RESUME_FILE;
  link.download = RESUME_DOWNLOAD_NAME;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
