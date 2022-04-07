import { shallowMount } from "@vue/test-utils";
import TodoTitle from '../TodoTitle'
import axios from 'axios'

// axios 가짜 모듈 생성
jest.mock(axios)

describe('TodoTitle Test', () => {
    let wrapper
    beforeEach(() => {
        const res = {
            data: {
                title: 'delectus aut autem'
            }
        }
         // 비동기 테스트
        // 가짜 함수를 할당
        // axios.get = jest.fn(() => {
        //     // Mocking : TodoTitle vue의 await를 사용하여 해당 데이터를 모킹함
        //     return new Promise(resolve => {
        //         resolve( {
        //             data: {
        //                 title: 'delectus aut autem'
        //             }
        //         })
        //     })
        // })

        // axios.get = jest.fn().mockResolvedValue(res)
        axios.get.mockResolvedValue(res) // 모듈 전체를 가짜 처리하여 이처럼 사용할 수 있음
        wrapper = shallowMount(TodoTitle)
    })
    test ('test', () => {
        expect(wrapper.text()).toBe('delectus aut autem')
    })
    test('IsCallback', () => {
        expect(axios.get).toHaveBeenCalledTimes(1)
        
        //fetchTodo는 감시 대상이 아니기 때문에 감시 결과를 알 수 없음
        // 따라서 spy를 통해서 감시한다
        const spy = jest.spyOn(wrapper.vm, 'fetchTodo')
        // 위의 beforeEach의 경우는 이미 lifecycle이 끝난 뒤 이므로 아래와 같이 실행 시킨다
        wrapper.vm.fetchTodo()
        expect(spy).toHaveBeenCalled()
    })
})
