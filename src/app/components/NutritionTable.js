import React from 'react'

export default function NutritionTable({nutrition}) {

    const nutritionArr = Object.entries(nutrition).filter(item => item[0] != 'updated_at')

    const nutritionElements =  nutritionArr.map(item => (
        <tr class="odd:bg-white even:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{item[0].charAt(0).toUpperCase()+item[0].slice(1)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item[1]}{item[0] === 'calories' ? ' calories' : 'g'}</td>
        </tr>
    ))

  return (
    <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 ">
          <tbody>
            {nutritionElements}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}
