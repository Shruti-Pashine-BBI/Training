document.addEventListener("DOMContentLoaded", function () {
  const newItemInput = document.getElementById("new-item");

  const addButton = document.getElementById("add-button");

  const removeButton = document.getElementById("remove-button");

  const itemList = document.getElementById("listdiv");

  const counter = document.getElementById("counter");

  let count = 0;

  addButton.addEventListener("click", function () {
    const inputValue = newItemInput.value;

    if (inputValue !== "") {
      const listItem = document.createElement("li");

      listItem.textContent = inputValue;

      count++;

      updateCounter();

      const deleteButton = document.createElement("button");

      deleteButton.textContent = "-";

      listItem.addEventListener("click", function () {
        listItem.classList.add("completed");
        deleteButton.classList.add("delete-button");
      });

      deleteButton.addEventListener("click", function () {
        const nodeitem = this.parentNode;

        itemList.removeChild(nodeitem);

        count--;

        updateCounter();
      });

      listItem.appendChild(deleteButton);

      itemList.appendChild(listItem);

      newItemInput.value = "";
    }
  });

  removeButton.addEventListener("click", removeItem);

  function removeItem() {
    try {
      const removeItems = document.querySelectorAll("li:not(.completed)");
      console.log(removeItems);
      removeItems[removeItems.length - 1].remove();
      // itemList.removeChild(itemList.lastElementChild);
      count--;
      updateCounter();
    } catch (err) {
      document.getElementById("counter").innerHTML = err.message;
    }
  }

  function updateCounter() {
    counter.innerText = `Task To Do: ${count}`;
  }
});
