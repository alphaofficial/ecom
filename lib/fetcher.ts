/** HTTP fetching mechanism here */
export const fetcher = async (url: string, data = undefined) =>
  fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json", // be explicit about the header. Otherwise, the browser will try to guess the content type
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      if (res.status > 399 && res.status < 200) {
        throw new Error(res.statusText);
      }
      const { data } = await res.json();
      return data;
    })
    .then((res) => res);
