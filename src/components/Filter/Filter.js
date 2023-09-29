import { useDispatch, useSelector } from 'react-redux';
import { FormField, FormItem, Wrapper } from './Filter.styled';
import { changeFilterByName } from 'redux/filterSlice';
import { selectFilterByName } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterByName = useSelector(selectFilterByName);

  return (
    <Wrapper>
      <FormItem>
        Find contacts by name
        <FormField
          type="text"
          value={filterByName}
          onChange={evt => dispatch(changeFilterByName(evt.target.value))}
        />
      </FormItem>
    </Wrapper>
  );
};
