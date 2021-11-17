import { Layout } from '../Layout';
import { SayGoodbye, SayHello } from '../../components/Demo';

const DashboardScreen = () => (
  <Layout>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white rounded shadow p-4 space-y-4">
        <p className="text-gray-800">Abc</p>
        <p className="text-gray-800">Def</p>
        <p className="text-gray-800">Ghi</p>
        <SayHello />
      </div>
      <div className="bg-white rounded shadow p-4 space-y-4">
        <p className="text-gray-800">Jkl</p>
        <p className="text-gray-800">Mno</p>
        <p className="text-gray-800">Pqr</p>
        <SayGoodbye />
      </div>
    </div>
  </Layout>
);

export default DashboardScreen;
