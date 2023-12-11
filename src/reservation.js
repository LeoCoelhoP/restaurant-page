export function displayReservation() {
    const content = document.querySelector("#content");
    content.classList.add("reservations")


    const form = document.createElement("form");


    const inputNameLabel = document.createElement("label");
    inputNameLabel.classList.add("grid");
    inputNameLabel.textContent = "Full Name"

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");


    const inputPeopleComingLabel = document.createElement("label");
    inputPeopleComingLabel.classList.add("grid");
    inputPeopleComingLabel.textContent = "People Coming"

    const peopleComing = document.createElement("input");


    peopleComing.setAttribute("type", "number");

    const dateLabel = document.createElement("label");
    dateLabel.classList.add("grid");
    dateLabel.textContent = "Reservation Date"

    const date = document.createElement("input");
    date.setAttribute("type", "datetime-local");


    const requestLabel = document.createElement("label");
    requestLabel.classList.add("grid");
    requestLabel.textContent = "Additional request";

    const request = document.createElement("textarea");
    

    const submit = document.createElement("input");
    submit.classList.add("grid");

    submit.setAttribute("type", "submit");
    submit.textContent = "SUBMIT";
    submit.classList.add("submit");



    inputNameLabel.appendChild(inputName);
    inputPeopleComingLabel.append(peopleComing);
    dateLabel.append(date);
    requestLabel.appendChild(request);
    
    form.appendChild(inputNameLabel);
    form.appendChild(inputPeopleComingLabel);
    form.appendChild(dateLabel);
    form.appendChild(requestLabel);
    form.appendChild(submit);
    content.appendChild(form);
    return content;
}