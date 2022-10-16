const PostSummaryItem = (post) => {
    const { topic, userName, time, title, image } = post;
    return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-10">
          <p class="text-secondary mb-1">${topic}</p>
          <span class="fw-bold">${userName} </span><i class="fas fa-check-circle"></i><span class="text-secondary"> -
            ${time}</span>
          <p class="fw-bold">
            ${title}
          </p>
        </div>
        <div class="col-2">
          <img class="img-fluid" src="${image}" />
        </div>
      </div>
    </li>
  `);
}
export default PostSummaryItem;