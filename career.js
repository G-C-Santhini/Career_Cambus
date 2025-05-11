const careers = [
  {
    title: "Software Engineer",
    domain: "Engineering",
    description: "Designs and builds software applications and systems.",
    link: "https://roadmap.sh/software-engineer"
  },
  {
    title: "UI/UX Designer",
    domain: "Design",
    description: "Creates user-friendly interfaces and experiences.",
    link: "https://www.interaction-design.org/"
  },
  {
    title: "Doctor",
    domain: "Healthcare",
    description: "Diagnoses and treats patient illnesses and injuries.",
    link: "https://www.bma.org.uk/"
  },
  {
    title: "Entrepreneur",
    domain: "Business",
    description: "Starts and manages new business ventures.",
    link: "https://www.entrepreneur.com/"
  },
  {
    title: "Civil Engineer",
    domain: "Engineering",
    description: "Plans and constructs infrastructure projects.",
    link: "https://www.asce.org/"
  },
  {
    title: "Graphic Designer",
    domain: "Design",
    description: "Designs visual content for branding, media, and advertising.",
    link: "https://www.behance.net/"
  }
];

const careerList = document.getElementById("careerList");
const careerFilter = document.getElementById("careerFilter");

function renderCareers(filter) {
  careerList.innerHTML = "";

  const filteredCareers = careers.filter(
    (career) => filter === "all" || career.domain === filter
  );

  if (filteredCareers.length === 0) {
    careerList.innerHTML = "<p>No careers found in this domain.</p>";
    return;
  }

  filteredCareers.forEach((career) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${career.title}</h3>
      <p><strong>Domain:</strong> ${career.domain}</p>
      <p>${career.description}</p>
      <a href="${career.link}" target="_blank" rel="noopener">Learn more</a>
    `;
    careerList.appendChild(card);
  });
}

// Initial load
renderCareers("all");

// Filter change
careerFilter.addEventListener("change", () => {
  renderCareers(careerFilter.value);
});
