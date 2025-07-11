const form = document.getElementById("studentForm")
    const table = document.getElementById("studentTable")

    form.addEventListener("submit", function (event) {
      event.preventDefault()

      const name = document.getElementById("name").value
      const age = document.getElementById("age").value
      const course = document.getElementById("course").value
      const email = document.getElementById("email").value
      const gender = form.gender.value;

      const row = document.createElement("tr")

      row.innerHTML = `<td class="border border-purple-900 px-4 py-2">${name}</td>
        <td class="border border-purple-900 px-4 py-2">${age}</td>
        <td class="border border-purple-900 px-4 py-2">${course}</td>
        <td class="border border-purple-900 px-4 py-2">${gender}</td>
        <td class="border border-purple-900 px-4 py-2">${email}</td>
        <td class="border border-purple-900 px-4 py-2">
          <button onclick="this.parentElement.parentElement.remove()" class="bg-black text-white px-3 py-1 rounded hover:bg-red-700 ">Delete</button>
        </td> `
      table.appendChild(row)
      form.reset()
       })