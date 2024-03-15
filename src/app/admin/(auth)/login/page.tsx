import Input from '@/components/input';
import SubmitButton from '@/container/admin/SubmitButton';

const AdminLogInPage = () => {
  return (
    <div className="w-[500px]">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className=" text-medium font-medium text-gray-700"
          >
            Email
          </label>
          <Input className="w-full">
            <Input.Text
              type="email"
              name="email"
              id="email"
              required
            />
          </Input>
        </div>
        <div>
          <label
            htmlFor="password"
            className=" text-medium font-medium text-gray-700"
          >
            Password
          </label>
          <Input className="w-full">
            <Input.Text
              type="password"
              name="password"
              id="password"
              required
            />
          </Input>
        </div>
        <div>
          <SubmitButton authType="login" />
        </div>
      </form>
    </div>
  );
};

export default AdminLogInPage;
