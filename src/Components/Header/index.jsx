import { Box,Img, useDisclosure } from "@chakra-ui/react";
import Logo1 from "../../assets/Images/Logo1.png";
import { IoMdMenu } from "react-icons/io";
import React from "react";
import DropDrawer from "../../Components/DropDrawer";

const Header = ({setAuthenticaded}) => {
    const { isOpen:isDrawerOpen,onOpen:onDrawerOpen,onClose:onDrawerClose } = useDisclosure();
    
  return (
    <Box
      w="100%"
      h={["10vh", "15vh"]}
      bg="#F2F6FF"
      d="flex"
      flexDir="row"
      justifyContent="center"
    >
      <Box
        w={["95%", "90%", "85%"]}
        d="flex"
        flexDir="row"
        justifyContent="center">
          <Box
          w={["95%","90%","85%"]}
          d="flex"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center">
            <Img 
              w={["80px","100px"]}
              src={Logo1}
              alt="CondoManage"/>
            <IoMdMenu 
              cursor="pointer" 
              size={50} 
              onClick={onDrawerOpen}/> 
          </Box>
          <DropDrawer 
          isDrawerOpen={isDrawerOpen}
          onDrawerClose={onDrawerClose}
          setAuthenticaded={setAuthenticaded}/>
      </Box>
    </Box>
    )
}

export default Header;
