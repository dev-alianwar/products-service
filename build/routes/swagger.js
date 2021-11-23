/**
* @swagger
* tags:
*   name: Categories
*   description: List of Categories
*/
/**
* @swagger
* components:
*   schemas:
*     CategoriesResponse:
*       properties:
*        success:
*          type: boolean
*          example: true
*        count:
*          type: integer
*          example: 2
*        result:
*          type: array
*          items:
*            type: object
*            properties:
*              id:
*                type: integer
*              title:
*                type: string
*     ErrorResponse:
*       properties:
*         success:
*           type: boolean
*           example: false
*         errors:
*           type: array
*           items:
*             type: object
*             properties:
*               code:
*                 type: string
*                 example: "ERROR_AUTH"
*               message:
*                 type: string
*                 example: "Access not granted."
*
*
*/
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: List of Categories
 *     tags: [ Categories ]
 *     security:
 *       - BearerAuth: [read]
 *     parameters:
 *       - in: query
 *         name: page
 *         example: 1
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: number of records per page
 *         example: 10
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sortBy
 *         description: Field name on which sorting applied
 *         schema:
 *           type: string
 *       - in: query
 *         name: desc
 *         description: make column sorting descending
 *         example: true
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Success Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/CategoriesResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ErrorResponse'
 */
//# sourceMappingURL=swagger.js.map