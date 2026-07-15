fetch('https://dummyjson.com/users/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById("patient-name").innerText = data.firstName + " " + data.lastName;
    document.getElementById("patient-dob").innerText = "DOB: " + data.birthDate;
    document.getElementById("patient-gender").innerText = "Gender: " + data.gender;
    document.getElementById("patient-phone").innerText = "Phone: " + data.phone;
    document.getElementById("patient-address").innerText = "Address: " + data.address.address;
  })
  .catch(error => console.log(error));

const ctx = document.getElementById('bpChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 122, 121, 119, 117],
        borderWidth: 2
      },
      {
        label: 'Diastolic',
        data: [80, 78, 82, 79, 81, 77],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

const diagnosticData = document.getElementById("diagnostic-data");
diagnosticData.innerHTML = `
  <div class="item-box">
    <h3>Hypertension</h3>
    <p>Respiratory Rate: 20 bpm</p>
    <p>Temperature: 98.6°F</p>
  </div>
`;

const labData = document.getElementById("lab-data");
labData.innerHTML = `
  <div class="item-box"><p>Blood Tests</p></div>
  <div class="item-box"><p>CT Scans</p></div>
  <div class="item-box"><p>Radiology Reports</p></div>
  <div class="item-box"><p>X-Rays</p></div>
`;