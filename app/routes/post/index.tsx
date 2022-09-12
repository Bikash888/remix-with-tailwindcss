import {
  ActionFunction,
  Form,
  redirect,
  json,
  useActionData,
  useTransition,
} from "remix";

const inputStyle = "w-full min-h-[42px] border mb-0 p-2";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData.get("title"));
  const title = formData.get("title");
  const description = formData.get("description");
  console.log(title, description);

  const errors = {
    title: title ? null : "Title is required",
    description: description ? null : "Description is required",
  };

  const hasErrors = Object.values(errors)?.some((errorMessage) => errorMessage);
  console.log(hasErrors);
  if (hasErrors) {
    return json(errors);
  }
  return redirect("/home");
};

export default function SavePost() {
  const errors = useActionData();
  const transition = useTransition();
  const isSaving = Boolean(transition.submission);

  return (
    <Form method={"post"} key="myPost" className="p-[120px] bg-slate-50">
      <label className="mb-6 mt-4">
        Title:
        <input name="title" className={inputStyle} />
        <p className="text-red-600">{errors?.title}</p>
      </label>
      <label className="mb-6 mt-4">
        Description:
        <textarea rows={4} name="description" className={inputStyle} />
        <p className="text-red-600">{errors?.description}</p>
      </label>
      <div>
        <button
          disabled={isSaving}
          type="submit"
          className="h-8 bg-slate-900 text-white w-[120px] mt-4"
        >
          {isSaving ? "Saving..." : "Save Post"}
        </button>
      </div>
    </Form>
  );
}
