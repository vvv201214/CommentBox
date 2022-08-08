const input = document.getElementById("comment");
const addButton = document.getElementById("add");
const replyButton = document.getElementById("reply");
const subContainer = document.getElementById("sub-container");
const deleteAllComment = document.getElementById("dlt-comment");

addButton.addEventListener("click", () => {


    const addedComment = document.createElement("p");
    addedComment.style.fontSize = "20px";
    addedComment.style.margin = "10px";
    addedComment.innerHTML = ` ${input.value}<br><br>
    <div id="btn">       
        <p id = "likeCounter">0</p>
        <button id="like" onclick = "likeComment(this)" >Like</button>
        <p id = dislikeCounter" >0</p>
        <button id="dislike" onclick = "dislikeComment(this)" >Dislike</button>
        <button id="reply" onclick = "replyComment(this)">Reply</button>
        <button id="dlt" onclick = "deleteComment(this)" >Delete</button>
    </div>`

    subContainer.append(addedComment);
    input.value = "";

});

function likeComment(curr){
    let count = curr.previousElementSibling.textContent;
    count++;
    curr.previousElementSibling.textContent = count;
}

function dislikeComment(curr){
    let count = curr.previousElementSibling.textContent;
    count++;
    curr.previousElementSibling.textContent = count;
}

function deleteComment(curr){
    curr.parentNode.parentNode.remove();
}

function replyComment(curr){
    let parent = curr.parentNode.parentNode;
    let subContainerSec = document.createElement("div");
    subContainerSec.setAttribute("id", "sub-container-sec");
    subContainerSec.innerHTML = `<input type="text" id="reply_text" placeholder = "add your reply">
    <button id="add-reply" onclick = "addReply(this)">Add reply</button>
    <button id="cancel" onclick = "cancel(this)">Cancel</button>`;
    parent.append(subContainerSec);
}
function addReply(curr){
    let inputText = curr.previousElementSibling.value;
    let replied = document.createElement("p");
    replied.textContent = inputText;
    replied.style.paddingBottom = "10px"
    curr.parentNode.append(replied);
    curr.previousElementSibling.remove();
    curr.nextElementSibling.remove();
    curr.remove();
}

function cancel(curr){
    curr.parentNode.remove();
}

deleteAllComment.addEventListener("click", ()=>{
    subContainer.remove();
})





