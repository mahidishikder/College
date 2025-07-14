import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex sm:my-10  justify-center items-center h-screen">
      <SignIn />
    </div>
  );
}
