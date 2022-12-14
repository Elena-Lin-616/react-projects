const paginate = (followers) => {
  // 0) get data from useFetch
  // console.log(followers);
  // 1) decide how many items per page
  const itemsPerPage = 10;

  // 2) how many page do we have, alway round up
  const pages = Math.ceil(followers.length / itemsPerPage);

  // 3) create the array of array, with 10 elements = pages
  const newFollower = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollower;
};

export default paginate;
