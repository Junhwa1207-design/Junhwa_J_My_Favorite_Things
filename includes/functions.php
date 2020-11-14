<?php

  $result = array();

  function getAllusers($conn)
  {
      $query =  "SELECT * FROM favoriteThings";

      $runQuery = $conn->query($query);

      while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
          $result[] = $row;
      }
      echo(json_encode($result));
  }

  function getSingleusers($conn, $id)
  {
      $query =  "SELECT * FROM favoriteThings WHERE id=" . $id . "";

      $runQuery = $conn->query($query);

      while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
          $result[] = $row;
      }
      echo(json_encode($result));
  }
