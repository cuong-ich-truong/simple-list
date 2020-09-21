import React, { useContext, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import SimpleListContext from '../simpleList/context/SimpleListContext';
import StLine from './lineItem/StLine';

const LineItemForm: React.FC = () => {
  const { categories, addLineItem } = useContext(SimpleListContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState('-1');

  useEffect(() => {
    if (categories[0] && categoryId === '-1') {
      setCategoryId(categories[0].id);
    }
  }, [categories]);

  const handleAddNewLineItem = () => {
    addLineItem({ id: '-1', name, price, categoryId });
  };

  return (
    <StLine marginTop="20px">
      <TextField
        fullWidth
        id="item-name-input"
        label="Item Name"
        variant="filled"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="item-price-input">Price</InputLabel>
        <FilledInput
          id="item-price-input"
          type="number"
          inputProps={{ min: '0', step: '1' }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          value={price}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(parseFloat(event.target.value));
          }}
        />
      </FormControl>
      <FormControl fullWidth required variant="filled">
        <InputLabel htmlFor="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="item-category-select"
          value={categoryId}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCategoryId(event.target.value);
          }}
        >
          {categories.map(({ id: categoryId, name, price, lineItems }) => (
            <MenuItem key={categoryId} value={categoryId}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={handleAddNewLineItem}>
        Add
      </Button>
    </StLine>
  );
};

export default LineItemForm;
