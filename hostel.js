    function openForm(formId) {
      // Hide all forms
      document.getElementById('studentForm').style.display = 'none';
      document.getElementById('hostelForm').style.display = 'none';
      document.getElementById('duesForm').style.display = 'none';

      // Show the selected form
      document.getElementById(formId).style.display = 'block';
    }

    function registerStudent() {
      const name = document.getElementById('studentName').value;
      const rollNumber = document.getElementById('studentRollNumber').value;
      const gender = document.getElementById('studentGender').value;
      const contactNumber = document.getElementById('studentContactNumber').value;
      const address = document.getElementById('studentAddress').value;

      const studentData = { name, rollNumber, gender, contactNumber, address };

      // Retrieve existing data or initialize an empty array
      const existingData = JSON.parse(localStorage.getItem('studentData')) || [];
      existingData.push(studentData);

      // Save the updated data back to localStorage
      localStorage.setItem('studentData', JSON.stringify(existingData));

      alert('Student registered successfully!');
    }

    function registerHostel() {
      const name = document.getElementById('hostelName').value;
      const location = document.getElementById('hostelLocation').value;
      const capacity = document.getElementById('hostelCapacity').value;

      const hostelData = { name, location, capacity };

      // Retrieve existing data or initialize an empty array
      const existingData = JSON.parse(localStorage.getItem('hostelData')) || [];
      existingData.push(hostelData);

      // Save the updated data back to localStorage
      localStorage.setItem('hostelData', JSON.stringify(existingData));

      alert('Hostel registered successfully!');
    }

    function submitDues() {
      const duesRollNumber = document.getElementById('duesRollNumber').value;
      const duesAmount = document.getElementById('duesAmount').value;

      const duesData = { duesRollNumber, duesAmount };

      // Retrieve existing data or initialize an empty array
      const existingData = JSON.parse(localStorage.getItem('duesData')) || [];
      existingData.push(duesData);

      // Save the updated data back to localStorage
      localStorage.setItem('duesData', JSON.stringify(existingData));

      alert('Hostel dues submitted successfully!');
    }
  