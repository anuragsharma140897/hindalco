import { ActionIcon, Text, Tooltip } from 'rizzui';
import { HeaderCell } from '../../../Component/ui/table';
import PencilIcon from '../../../Constant/Icons/pencil';
import { routes } from '../../../config/routes';
import SearchUser from '../../../shared/common/search-user';
import EyeIcon from '../../../Constant/Icons/eye';

export const getOutboundBatchColumns = ({ sortConfig, onDeleteItem, onHeaderCellClick, openModal }) => [
 
    {
        title: <HeaderCell title="#" />,
        dataIndex: 'index',
        key: 'index',
        width: 20,
        render: (value, row, index) => <Text>{index + 1 || '---'}</Text>,
    },
      {
        title: <HeaderCell title="Vehicle Number" className={'font-extrabold'} />,
        dataIndex: 'vehicleNumber',
        key: 'vehicleNumber',
        width: 130,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      },
      {
        title: <HeaderCell title="Vehicle Engine" className={'font-extrabold'} />,
        dataIndex: 'vehicleEngine',
        key: 'vehicleEngine',
        width: 130,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      }, {
        title: <HeaderCell title="Vehicle Maker" className={'font-extrabold'} />,
        dataIndex: 'vehicleMaker',
        key: 'vehicleMaker',
        width: 130,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      }, {
        title: <HeaderCell title="Vehicle Model" className={'font-extrabold'} />,
        dataIndex: 'vehicleModel',
        key: 'vehicleModel',
        width: 130,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      },
      {
        title: <HeaderCell title="Vehicle Type" className={'font-extrabold'} />,
        dataIndex: 'vehicleType',
        key: 'vehicleType',
        width: 120,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      }, {
        title: <HeaderCell title="Vehicle Year" className={'font-extrabold'} />,
        dataIndex: 'vehicleYear',
        key: 'vehicleYear',
        width: 120,
        render: (value) => (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ),
      },

];
