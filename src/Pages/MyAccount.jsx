import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { getUserService } from "../Services/userServices"

export const MyAccount = () => {

  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error)
      }
    }
    fetchUserData()
  }, [token])

  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" m={1}>
              Mi cuenta
            </Typography>
          </ListItem>
          <ListItemAvatar sx={{ display: "flex", alignItems: "center", gap: "10px", flexDirection: "column" }}>
            <Avatar sx={{ width: 90, height: 90 }} alt={userData?.first_name} src={`https://unavatar.io/${userData?.first_name}`} />
            <Typography variant="h5">
              {userData?.first_name} {userData?.last_name}
            </Typography>
            <Typography variant="subtitle1">
              {userData?.email}
            </Typography>
            <Typography variant="subtitle1">
              {userData?.gender}
            </Typography>
          </ListItemAvatar>
        </List>
      </CardContent>
    </Card>
  )
}
