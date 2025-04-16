<html>

<body>
    <h1>{{ $campaign->subject }}</h1>
    <p>{{ $campaign->content }}</p>
    <img src="{{ url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/LOZse8AAAAASUVORK5CYII=' . $campaign->id . '/email-open') }}" width="1" height="1" />
</body>

</html>