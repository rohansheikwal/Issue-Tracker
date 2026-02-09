
const form = document.getElementById("complaintForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const issue = document.getElementById("issue").value;

    const res = await fetch("/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, issue })
    });

    const data = await res.json();
    document.getElementById("message").innerText =
      `Complaint submitted! Your ID is ${data.id}`;

    form.reset();
  });
}

const complaintsDiv = document.getElementById("complaints");
if (complaintsDiv) {
  fetchComplaints();
}

async function fetchComplaints() {
  const res = await fetch("/complaints");
  const complaints = await res.json();

  complaintsDiv.innerHTML = "";

  complaints.forEach(c => {
    const div = document.createElement("div");
    div.className = "complaint";

    div.innerHTML = `
      <p><b>ID:</b> ${c.id}</p>
      <p><b>Name:</b> ${c.name}</p>
      <p><b>Issue:</b> ${c.issue}</p>
      <p><b>Status:</b> ${c.status}</p>

      <select onchange="updateStatus(${c.id}, this.value)">
        <option value="pending">pending</option>
        <option value="resolved">resolved</option>
        <option value="rejected">rejected</option>
      </select>

      <button onclick="deleteComplaint(${c.id})">Delete</button>
    `;

    complaintsDiv.appendChild(div);
  });
}

async function updateStatus(id, status) {
  await fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  fetchComplaints();
}

async function deleteComplaint(id) {
  await fetch(`/complaints/${id}`, { method: "DELETE" });
  fetchComplaints();
}
