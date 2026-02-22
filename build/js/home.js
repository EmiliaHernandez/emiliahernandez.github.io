  const lines = [
    "Deploying website...",
    "Loading Figma workspace...",
    "Developing Hubspot modules...",
    "NPM run dev...",
    "Writing PHP functions...",
    "Creating page wireframes...",
    "Designing WordPress Themes...",
    "Previewing GitHub pull request..."
  ];

  const shuffledLines = lines
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const textElement = document.getElementById("typewriter-text");
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentLine = shuffledLines[lineIndex];

  const typeSpeed = 50;
  const deleteSpeed = 30;
  const delayBetweenLines = 1500;

  function type() {
    if (isDeleting) {
      textElement.textContent = currentLine.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        lineIndex++;
        if (lineIndex >= shuffledLines.length) {
          lineIndex = 0;
          shuffledLines.sort(() => Math.random() - 0.5);
        }
        currentLine = shuffledLines[lineIndex];
        setTimeout(type, 300);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      textElement.textContent = currentLine.substring(0, charIndex++);
      if (charIndex > currentLine.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenLines);
      } else {
        setTimeout(type, typeSpeed);
      }
    }
  }

  type();