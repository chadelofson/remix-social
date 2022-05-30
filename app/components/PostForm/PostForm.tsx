import type { Props } from "./types";

function PostForm({ error, fields, method = "post", ...props }: Props) {
  return (
    <form method={method} {...props} className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label htmlFor='title' className='mb-2 text-gray-600'></label>
        <input
          defaultValue={fields?.title}
          className='p-4'
          name='title'
          type='text'
          placeholder='Title of your post'
        />
        {error?.fieldsError?.title && (
          <p className='text-red-500'>{error.fieldsError?.title}</p>
        )}
      </div>
      <div className='mb-4 flex flex-col'>
        <label htmlFor='body' className='mb-2 text-gray-600'></label>
        <textarea
          defaultValue={fields?.body}
          className='p-4'
          name='body'
          placeholder='Write something amazing'
        />
        {error?.fieldsError?.body && (
          <p className='text-red-500'>{error.fieldsError?.body}</p>
        )}
      </div>
      {/* {error.formError && <p className='text-red-500'>{error.formError}</p>} */}
      <button
        type='submit'
        className='transition rounded text-blue-700 font-bold py-4 px-6 transparent hover:gb-gray-100'
      >
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
