import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard";
import { Box, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import ShareIcon from "@/icons/ShareIcon";
const Component = () => {
  const api = "https://api.tjori.com/api/v7filters/na/women-all-products/";
  const [page, setPage] = useState(1);
  const [productData, setProductData] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getApiData = async (pageNo) => {
    setPage(pageNo);
    const res = await axios.get(api, {
      params: {
        f_page: pageNo,
        format: "json",
      },
    });
    let productList = [...productData, ...res.data.data.products];
    if (res.data.data.pagination.total_records > productList.length)
      setHasMore(true);
    else setHasMore(false);
    setTotalLength(res.data.data.pagination.total_records);
    setProductData(productList);
  };
  useEffect(() => {
    getApiData(1);
  }, []);

  if (productData.length === 0) return <h1>loading....</h1>;
  return (
    <>
      <Box sx={{ margin: "1rem" }}>
        <Box className="product-nav">
          {/* this heading will be dynamic as we are not getting the categoris */}
          <Typography>Women • All Products</Typography>
          <Typography>
            {totalLength} Products{" "}
            <ShareIcon style={{ paddingLeft: "2px", cursor: "pointer" }} />
          </Typography>
        </Box>
        <div
          id="scrollableDiv"
          className="scroll-container"
          style={{
            height: 1120,
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            dataLength={productData.length}
            next={() => getApiData(page + 1)}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <Grid container spacing={2} sx={{ m: 0 }}>
              {/*Put the scroll bar always on the bottom*/}
              {productData.map((data, id) => (
                <Grid
                  sx={{ p: "20px 16px" }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={id}
                >
                  <ProductCard data={data} />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </div>
      </Box>
    </>
  );
};

export default Component;
