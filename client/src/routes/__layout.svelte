<script>
    import Container from 'sveltestrap/src/Container.svelte';
    import Row from 'sveltestrap/src/Row.svelte';
    import Col from 'sveltestrap/src/Col.svelte';
</script>
header
<Container>
    <Row>
        <Col>
            <slot />
        </Col>
    </Row>
</Container>

footer