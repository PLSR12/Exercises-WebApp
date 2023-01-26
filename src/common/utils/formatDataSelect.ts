export function formatDataSelectComponent(data: any) {
  const dataFormat = data.map((rows: any) => {
    const formatCategories = {
      value: rows.id,
      label: rows.name,
    }

    return formatCategories
  })

  dataFormat.sort(function (a: { label: string }, b: { label: string }) {
    if (a?.label < b?.label) {
      return -1
    } else {
      return true
    }
  })

  return dataFormat
}
