export default function Mailchimp() {
  return (
    <>
      <form
        action="https://codes.us1.list-manage.com/subscribe/post"
        method="POST"
        className="flex flex-col space-y-2 dark:text-gray-600"
      >
        <input type="hidden" name="u" value="bf9ff5d0309e09af91db5f52e" />
        <input type="hidden" name="id" value="20e4dc464e" />
        <input type="text" name="MERGE0" placeholder="email" />
        <input type="text" name="MERGE1" placeholder="name" />
        <input
          type="submit"
          name="submit"
          className="rounded-lg px-3 py-1 font-semibold bg-navy text-white dark:bg-white dark:text-navy mt-1 cursor-pointer"
        />
      </form>
    </>
  );
}
