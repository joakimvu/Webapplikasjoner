// Dummy kode
// type MyErrorType = { id: string }

// const validation = (): MyErrorType => {
//   return { id: '1' }
// }

// export const handleResponse = (req, res, resource, validation) => {
//   switch (res.method.toLowerCase()) {
//     case 'get':
//       const errors = validation(addRequestMeta, resource)
//       if (errors)
//         return res.status(400).json({
//           status: false,
//           error: `${resource} has invalid data with ${errors}`,
//         })
//   }
// }
