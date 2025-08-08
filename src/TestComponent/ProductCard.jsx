import React from 'react';
import { Button, Select, MenuItem, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  const isAvailable = product.rating?.count > 0;
  const variants = ['S', 'M', 'L', 'XL']; // Simulated variants

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: 'contain',
          padding: 2,
          backgroundColor: '#f8f9fa',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          noWrap
          title={product.title}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
        >
          ${product.price.toFixed(2)}
        </Typography>

        <Box mt={2}>
          <Select
            fullWidth
            size="small"
            displayEmpty
            defaultValue=""
            disabled={variants.length === 0}
            sx={{ backgroundColor: '#fff' }}
          >
            <MenuItem value="" disabled>
              Select Size
            </MenuItem>
            {variants.map((variant) => (
              <MenuItem key={variant} value={variant}>
                {variant}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color={isAvailable ? 'primary' : 'inherit'}
          fullWidth
          disabled={!isAvailable}
          sx={{
            backgroundColor: isAvailable ? undefined : '#ccc',
            color: isAvailable ? '#fff' : '#666',
            '&:hover': {
              backgroundColor: isAvailable ? 'primary.dark' : '#ccc',
            },
          }}
        >
          {isAvailable ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;