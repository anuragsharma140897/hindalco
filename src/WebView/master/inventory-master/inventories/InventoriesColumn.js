import { ActionIcon, Text, Tooltip } from "rizzui";
import { HeaderCell } from "../../../../Component/ui/table";


export const InventoriesColumn = ({ reduxInventory }) => [

  

  {
    title: (
      <HeaderCell title="#" />
    ),
    dataIndex: 'index',
    key: 'index',
    width: 10,
    render: (value, row, index) => <Text>{index + 1 || '---'}</Text>,
  },

  {
    title: <HeaderCell title="Product Name" className={'font-extrabold'} />,
    dataIndex: 'product_id',
    key: 'product_id',
    width: 100,
    render: (value) => (
      <Text className="font-medium text-gray-700">{reduxInventory?.doc?.content[0]?.product_id?.productName || '---'}</Text>
    ),
  },
  {
    title: <HeaderCell title="Batch Name" className={'font-extrabold'} />,
    dataIndex: 'batchName',
    key: 'batchName',
    width: 100,
    render: (value) => (
        <Text className="font-medium text-gray-700">{reduxInventory?.doc?.content[0]?.batchName || '---'}</Text>
        ),
  },

  {
    title: <HeaderCell title="Building ID" className={'font-extrabold'} />,
    dataIndex: 'buildingId',
    key: 'buildingId',
    width: 100,
    render: (value) => (
      <Text className="font-medium text-gray-700">{value || '---'}</Text>
    ),
  },
  {
    title: <HeaderCell title="Total Inventory" className={'font-extrabold'} />,
    dataIndex: 'totalInventory',
    key: 'totalInventory',
    width: 100,
    render: (value) => (
        <Text className="font-medium text-gray-700">{reduxInventory?.doc?.content[0]?.totalInventory || '---'}</Text>
    ),
  },
  {
    title: <HeaderCell title="Rfid Tag " className={'font-extrabold'} />,
    dataIndex: 'rfidTag',
    key: 'rfidTag',
    width: 100,
    render: (value) => (
        <Text className="font-medium text-gray-700">{value || '---'}</Text>
    ),
  },
  {
    title: <HeaderCell title="Movement Status" className={'font-extrabold'} />,
    dataIndex: 'movementStatus',
    key: 'movementStatus',
    width: 100,
    render: (value) => (
        <Text className="font-medium text-gray-700">{reduxInventory?.doc?.content[0]?.movementStatus || '---'}</Text>
    ),
  },
  {
    title: <HeaderCell title="Status" className={'font-extrabold'} />,
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (value) => (
     <>
        <Text className="font-medium text-gray-700">{reduxInventory?.doc?.content[0]?.status || '---'}</Text>


     </>
    ),
  },

];

