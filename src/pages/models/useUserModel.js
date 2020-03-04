import { createModel } from 'hox'
import { useState, useEffect, useCallback } from 'react'

function useUserModel() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers([{ name: 'nanfeng' }, { name: 'dongfeng' }])
  }, [setUsers])

  return {
    users
  }
}

export default createModel(useUserModel)
