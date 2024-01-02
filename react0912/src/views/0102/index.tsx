import React from 'react'
import HookReview from './a_hook_review/HookReview'
import UseMemo from './b_hooks/UseMemo'
import UseCallback from './b_hooks/UseCallback'
import ReactMemo from './b_hooks/ReactMemo'
import Mui01 from './c_MUI/Mui01'

export default function index() {
  return (
    <>
      <h1>리액트 훅 복습</h1>
      <HookReview/>

      <h1>useMemo</h1>
      <UseMemo/>
      <h1>useCallback</h1>
      <UseCallback/>
      <h1>ReactMemo</h1>
      <ReactMemo/>
      <h1>MUI 사용 방법</h1>
      <Mui01/>

    </>
  )
}
