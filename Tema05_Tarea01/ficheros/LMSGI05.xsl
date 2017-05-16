<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!--	<xsl:output method="xml" indent="yes" doctype-public="-//W3C//DTD XHTML 1.1.//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />-->
	<xsl:output method="html" encoding="UTF-8"/>
	<xsl:template match="/notas">
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es">
			<head>
				<title>TAREA 1. TEMA 5</title>
			</head>
			<body bgcolor="#d6eaf8">
				<h2 align="center">
					CONVOCATORIA JUNIO. Calificaciones.
				</h2>		
				<table width="80%" border="2" align="center">
					<tr bgcolor="#369">
						<th colspan="3">DATOS</th>
						<th colspan="3">NOTAS</th>
					</tr>
					<tr bgcolor="#69C">						
						<th>Nombre</th>
						<th>Apellidos</th>
						<th>Tareas</th>
						<th>Cuestionarios</th>
						<th>Examen</th>
						<th>Final</th>
					</tr>
					<xsl:for-each select="/notas/alumno">
						<xsl:sort select="apellidos" data-type="text" order="ascending"/>						
						<xsl:if test="@convocatoria='Junio'">					
							<tr bgcolor="#F5F5DC">
								<td> <xsl:value-of select="nombre"/> </td>
								<td> <xsl:value-of select="apellidos"/> </td>
								<td align="center"> <xsl:value-of select="tareas"/> </td>
								<td align="center"> <xsl:value-of select="cuestionarios"/> </td>
								<td align="center"> <xsl:value-of select="examen"/> </td>
								<td align="center">
									<xsl:choose>
										<xsl:when test="final>=9"> <font color="blue">SOBRESALIENTE</font> </xsl:when>
										<xsl:when test="final>=7"> <font color="blue">NOTABLE</font> </xsl:when>
										<xsl:when test="final>=6"> <font color="blue">BIEN</font> </xsl:when>
										<xsl:when test="final>=5"> <font color="blue">SUFICIENTE</font> </xsl:when>
										<xsl:otherwise> <font color="red">INSUFICIENTE</font> </xsl:otherwise>
									</xsl:choose>
								</td>
							</tr>
						</xsl:if>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

