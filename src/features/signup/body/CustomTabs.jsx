import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const CustomTabs = ({ activeID }) => {
  const [active, setActive] = useState(Number(activeID) || 1);
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setActive(Number(searchParams.get("id")));
  }, [searchParams.get("id")]);

  useEffect(() => {
    if (!searchParams.get("id")) {
      setSearchParams({ id: 1 });
    }
  }, []);
  const data = [
    {
      id: 1,
      name: "Host",
    },
    {
      id: 2,
      name: "Guest",
    },
    {
      id: 3,
      name: "Delegate",
    },
  ];
  return (
    <Box className={styles.tablist}>
      {data.map((e, i) => (
        <Box
          key={i}
          onClick={() => {
            setActive(e.id);
            setSearchParams({ id: e.id });
          }}
          className={`${styles.tab} ${e.id === active ? styles.active : ""}`}
        >
          {e.name}
        </Box>
      ))}
    </Box>
  );
};

export default CustomTabs;
