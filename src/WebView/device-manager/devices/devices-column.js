import { Text, Tooltip, ActionIcon } from 'rizzui';
import { HeaderCell } from '../../../Component/ui/table';
import DeletePopover from '../../../shared/delete-popover';
import PencilIcon from '../../../Constant/Icons/pencil';
import AddSiteMaster from '../../../Form/master/site-master/add-site-master';
import { EditScreen } from '../../../shared/edit-screen';
import { HitApi } from '../../../Store/Action/Api/ApiAction';
import { deleteSite, searchBuilding } from '../../../Constant/Api/Api';
import { getFormattedDate } from '../../../Utils/Utils';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useAlertController from '../../../Hooks/use-alert-controller';
import TableActions from '../../../Component/ui/table/TableActions';

export const GetDeviceMasterColumns = (openModal, closeModal, ApiHit) => {
  const { showCustomAlert } = useAlertController();
  const [loadingRows, setLoadingRows] = useState({});

  const handleDelete = async (row) => {
    setLoadingRows((prev) => ({ ...prev, [row.index]: true }));

    const json = { _id: row?._id };

    // try {
    //   const result = await HitApi(json, deleteSite);
    //   if (result?.success !== false) {
    //     showCustomAlert({
    //       type: 'success',
    //       title: 'Success!',
    //       message: 'Site Deleted Successfully',
    //     });
    //     if (ApiHit) { ApiHit(); }
    //   } else {
    //     showCustomAlert({
    //       type: 'error',
    //       title: 'Delete Error',
    //       message: 'Unable to delete this role. This role is already linked with a user.',
    //     });
    //   }
    // } catch (err) {

    // } finally {
    //   setLoadingRows((prev) => ({ ...prev, [row.index]: false }));
    // }
    
  };

  const renderCell = (value, row, content) => (
    loadingRows[row.index] ? <Skeleton /> : content
  );

  return [
    {
      title: <HeaderCell title="#" />,
      dataIndex: 'index',
      key: 'index',
      width: 10,
      render: (value, row, index) => renderCell(value, row, <Text>{index + 1 || '---'}</Text>),
    },
    {
      title: <HeaderCell title="Device Type" className="font-extrabold" />,
      dataIndex: 'deviceType',
      key: 'deviceType',
      width: 100,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{value || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="make" className="font-extrabold" />,
      dataIndex: 'make',
      key: 'make',
      width: 100,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{value || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="model" className="font-extrabold" />,
      dataIndex: 'model',
      key: 'model',
      width: 100,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{value || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="Firmware Version" className="font-extrabold" />,
      dataIndex: 'firmwareVersion',
      key: 'firmwareVersion',
      width: 100,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{value || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="Is Cloud Configurable" className="font-extrabold" />,
      dataIndex: 'isCloudConfigurable',
      key: 'isCloudConfigurable',
      width: 150,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{getFormattedDate(value, ['date', 'month', 'year', 'hour', 'minute', 'second']) || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="Secure Connection Type" className="font-extrabold" />,
      dataIndex: 'secureConnectionType',
      key: 'secureConnectionType',
      width: 150,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{getFormattedDate(value, ['date', 'month', 'year', 'hour', 'minute', 'second']) || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="Network Information" className="font-extrabold" />,
      dataIndex: 'host',
      key: 'host',
      width: 150,
      render: (value, row) => renderCell(value, row, (
        <Text className="font-medium text-gray-700">{getFormattedDate(value, ['date', 'month', 'year', 'hour', 'minute', 'second']) || '---'}</Text>
      )),
    },
    {
      title: <HeaderCell title="Actions" className="font-extrabold" />,
      dataIndex: 'action',
      key: 'action',
      width: 300,
      render: (_, row) => renderCell(null, row, (
        <TableActions
          screen={'siteMaster'}
          row={row}
          onEdit={(rowData) => EditScreen(openModal, closeModal, rowData, 'Edit Site Master', AddSiteMaster, 800, ApiHit)}

          onDelete={(rowData) => handleDelete(rowData)}
          checkKeys={['buildingIds','locationIds','readerIds']}
        />
      )),
    },
  ];
};
