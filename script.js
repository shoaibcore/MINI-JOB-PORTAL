let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

displayJobs();

function addJob(){

  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;

  if(title === "" || company === "" || location === ""){
    alert("Please fill all fields");
    return;
  }

  const job = {
    title,
    company,
    location
  };

  jobs.push(job);

  localStorage.setItem("jobs", JSON.stringify(jobs));

  displayJobs();

  document.getElementById("title").value = "";
  document.getElementById("company").value = "";
  document.getElementById("location").value = "";
}

function displayJobs(){

  const jobList = document.getElementById("jobList");

  jobList.innerHTML = "";

  jobs.forEach((job, index) => {

    jobList.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>

        <button 
          class="delete-btn"
          onclick="deleteJob(${index})"
        >
          Delete
        </button>
      </div>
    `;
  });
}

function deleteJob(index){

  jobs.splice(index, 1);

  localStorage.setItem("jobs", JSON.stringify(jobs));

  displayJobs();
}

function searchJob(){

  const searchValue = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchValue)
  );

  const jobList = document.getElementById("jobList");

  jobList.innerHTML = "";

  filteredJobs.forEach((job, index) => {

    jobList.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
      </div>
    `;
  });
}