const getBlogs = () => {
  let blogs = localStorage.getItem("tbl_blogs");
  if (blogs === undefined || blogs === null) {
    blogs = [];
  } else {
    blogs = JSON.parse(blogs);
  }
  return blogs;
};

const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const clearForm = () => {
  $("#title").val("");
  $("#author").val("");
  $("#content").val("");
};

const successMessage = (message) => {
  Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
  });
};

const confirmMessage = (message) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Confirm",
      text: message,
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      // return result.isConfirmed;
      resolve(result.isConfirmed);
    });
  });
};

const warningMessage = (message) => {
  Swal.fire({
    title: "Warning!",
    text: message,
    icon: "warning",
  });
};
