import tempfile
import os
from render import CredosRenderer, get_context_data


def test_render_creates_file_and_contains_title(tmp_path):
    renderer = CredosRenderer('templates')
    context = get_context_data()
    out = tmp_path / 'out_index.html'
    renderer.render_to_file('base.html', str(out), **context)
    assert out.exists()
    content = out.read_text(encoding='utf-8')
    assert context['page_title'] in content
    # Also check that a known dish appears
    assert context['sandwich_title'] in content or context['dishes_heading'] in content
