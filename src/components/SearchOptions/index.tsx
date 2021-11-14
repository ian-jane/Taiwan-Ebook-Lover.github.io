import { FilterOutlined } from '@ant-design/icons';
import Box from '@components/Box';
import FilterCheckboxes, { FilterCheckboxesProps } from '@components/FilterCheckboxes';
import OrderBySelect from '@components/OrderBySelect';
import { Button, Popover } from 'antd';
import { FunctionComponent, useState } from 'react';
import { MarginProps } from 'styled-system';

export interface SearchOptionsProps extends MarginProps {
  filterProps?: FilterCheckboxesProps;
}

const SearchOptions: FunctionComponent<SearchOptionsProps> = ({ filterProps, ...props }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const onPopoverConfirm = () => {
    if (filterProps?.onConfirm) filterProps.onConfirm();
    setPopoverVisible(false);
  };

  return (
    <Box display="grid" gridTemplateColumns="auto auto" gridColumnGap="1rem" {...props}>
      <Popover
        placement="bottom"
        trigger="click"
        visible={popoverVisible}
        onVisibleChange={(visible) => setPopoverVisible(visible)}
        content={
          <FilterCheckboxes showConfirm={filterProps?.showConfirm} onConfirm={onPopoverConfirm} />
        }
      >
        <Button
          icon={<FilterOutlined />}
          size="large"
          style={{ padding: '0 1.2rem', height: 'auto' }}
        >
          篩選書店
        </Button>
      </Popover>
      <OrderBySelect />
    </Box>
  );
};

export default SearchOptions;
