import { Link } from '..';
import { ForgotForm } from '../Formik';

const ForgotScreen = () => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← back to login</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Password recovery</h2>
      <ForgotForm />
    </div>
  </main>
);

export default ForgotScreen;
