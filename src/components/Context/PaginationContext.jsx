import React ,{createContext,useContext,useState} from 'react';

const PagenationContext=React.createContext();

const PagenationProvider=({children})=>{
  const [pageSize,setPageSize]=useState(4);//page size state
  const [pageNum,setPageNum]=useState(1);//page number state
  const pageProps={pageSize,pageNum,setPageNum,setPageSize};

  return (
    <PagenationContext.Provider value={pageProps}>
      {children}
    </PagenationContext.Provider>
  )
}

export default PagenationProvider ;

export const usePagenation= ()=>useContext(PagenationContext);