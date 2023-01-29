import AddButton from "@/icons/AddButton";
import Wishlist from "@/icons/Wishlist";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";

const ProductCard = ({ data }) => {
  return (
    <Card className="product-card">
      <CardActionArea>
        <Wishlist
          style={{
            position: "absolute",
            top: 17,
            right: 17,
            cursor: "pointer",
          }}
        />
        <CardMedia
          component="img"
          className="image"
          width="280.15px"
          height="373.26px"
          image={data.image[0]}
          alt={data.name}
        />
        <CardContent className="product-details">
          <Typography className="product-name" component={"div"}>
            {data.name}
          </Typography>
          <Box className="price-container">
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography className="discounted-price">
                ₹ {data.special_price}
              </Typography>
              <Typography className="original-price">
                {data.inr_discount ? data.price : ""}
              </Typography>
              <Typography className="discount">
                {data.inr_discount ? `${data.inr_discount}% Off` : ""}
              </Typography>
            </Box>
            <Box>
              <AddButton />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
